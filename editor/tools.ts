/// <reference path="./bitmap.ts" />

namespace mkcd {
    export abstract class Edit {
        protected startCol: number;
        protected startRow: number;

        constructor (protected canvasWidth: number, protected canvasHeight: number, protected color: number) {
        }

        public abstract update(col: number, row: number): void;
        public abstract doEdit(bitmap: Bitmap): void;

        start(cursorCol: number, cursorRow: number) {
            this.startCol = cursorCol;
            this.startRow = cursorRow;
        }
    }

    export abstract class SelectionEdit extends Edit {
        protected endCol: number;
        protected endRow: number;
        
        update(col: number, row: number) {
            this.endCol = col;
            this.endRow = row;
        }

        protected topLeft(): Coord {
            return [Math.min(this.startCol, this.endCol), Math.min(this.startRow, this.endRow)];
        }

        protected bottomRight(): Coord {
            return [Math.max(this.startCol, this.endCol), Math.max(this.startRow, this.endRow)];
        }
    }

    /**
     * Regular old drawing tool
     */
    export class PaintEdit extends Edit {
        protected mask: Bitmask;

        constructor (canvasWidth: number, canvasHeight: number, color: number) {
            super(canvasWidth, canvasHeight, color);
            this.mask = new mkcd.Bitmask(canvasWidth, canvasHeight);
        }

        update(col: number, row: number) {
            this.mask.set(col, row);
        }

        doEdit(bitmap: Bitmap) {
            for (let c = 0; c < bitmap.width; c++) {
                for (let r = 0; r < bitmap.height; r++) {
                    if (this.mask.get(c, r)) {
                        bitmap.set(c, r, this.color);
                    }
                }
            }
        }
    }

    /**
     * Tool for drawing filled rectangles
     */
    export class RectangleEdit extends SelectionEdit {
        doEdit(bitmap: Bitmap) {
            const tl = this.topLeft();
            const br = this.bottomRight();
            for (let c = tl[0]; c <= br[0]; c++) {
                for (let r = tl[1]; r <= br[1]; r++) {
                    bitmap.set(c, r, this.color);
                }
            }
        }
    }

    /**
     * Tool for drawing empty rectangles
     */
    export class OutlineEdit extends SelectionEdit {
        doEdit(bitmap: Bitmap) {
            const tl = this.topLeft();
            const br = this.bottomRight();
            for (let c = tl[0]; c <= br[0]; c++) {
                bitmap.set(c, tl[1], this.color);
                bitmap.set(c, br[1], this.color);
            }
            for (let r = tl[1]; r <= br[1]; r++) {
                bitmap.set(tl[0], r, this.color);
                bitmap.set(br[0], r, this.color);
            }
        }
    }

    /**
     * Tool for drawing straight lines
     */
    export class LineEdit extends SelectionEdit {
        doEdit(bitmap: Bitmap) {
            this.bresenham(this.startCol, this.startRow, this.endCol, this.endRow, bitmap);
        }

        // https://en.wikipedia.org/wiki/Bresenham%27s_line_algorithm
        private bresenham(x0: number, y0: number, x1: number, y1: number, bitmap: Bitmap) {
            const dx = x1 - x0;
            const dy = y1 - y0;
            if (dx === 0) {
                const startY = dy >= 0 ? y0 : y1;
                const endY = dy >= 0 ? y1 : y0;
                for (let y = startY; y <= endY; y++) {
                    bitmap.set(x0, y, this.color);
                }
                return;
            }
            
            const xStep = dx > 0 ? 1 : -1;
            const yStep = dy > 0 ? 1 : -1;
            const dErr = Math.abs(dy / dx);

            let err = 0;
            let y = y0;
            for (let x = x0; x != x1; x += xStep) {
                bitmap.set(x, y, this.color);
                err += dErr;
                while (err >= 0.5) {
                    bitmap.set(x, y, this.color);
                    y += yStep;
                    err -= 1;
                }
            }
        }
    }

    /**
     * Tool for circular outlines
     */
    export class CircleEdit extends SelectionEdit {
        doEdit(bitmap: Bitmap) {
            const tl = this.topLeft();
            const br = this.bottomRight();
            const dx = br[0] - tl[0];
            const dy = br[1] - tl[1];
            if (dx < dy) {
                br[1] = tl[1] + dx;
            }
            else {
                br[0] = tl[0] + dy;
            }
            const radius = Math.floor((br[0] - tl[0]) / 2);
            const cx = tl[0] + radius;
            const cy = tl[1] + radius;
            
            this.midpoint(cx, cy, radius, bitmap);
        }

        // https://en.wikipedia.org/wiki/Midpoint_circle_algorithm
        midpoint(cx: number, cy: number, radius: number, bitmap: Bitmap) {
            let x = radius;
            let y = 0;
            let err = 0;
            while (x >= y) {
                bitmap.set(cx + x, cy + y, this.color);
                bitmap.set(cx + x, cy - y, this.color);
                bitmap.set(cx + y, cy + x, this.color);
                bitmap.set(cx + y, cy - x, this.color);
                bitmap.set(cx - y, cy + x, this.color);
                bitmap.set(cx - y, cy - x, this.color);
                bitmap.set(cx - x, cy + y, this.color);
                bitmap.set(cx - x, cy - y, this.color);
                if (err <= 0) {
                    y += 1;
                    err += 2 * y + 1;
                }
                if (err > 0) {
                    x -= 1;
                    err -= 2 * x + 1;
                }
            }      
        }
    }


    export class FillEdit extends Edit {
        protected col: number;
        protected row: number;

        start(col: number, row: number) {
            this.col = col;
            this.row = row;
        }

        update(col: number, row: number) {
            this.col = col;
            this.row = row;
        }
        
        doEdit(bitmap: Bitmap) {
            const replColor = bitmap.get(this.col, this.row);
            if (replColor === this.color) {
                return;
            }

            const mask = new mkcd.Bitmask(bitmap.width, bitmap.height);
            mask.set(this.col, this.row);
            const q: Coord[] = [[this.col, this.row]];
            while (q.length) {
                const [c, r] = q.pop();
                if (bitmap.get(c, r) === replColor) {
                    bitmap.set(c, r, this.color);
                    tryPush(c + 1, r);
                    tryPush(c - 1, r);
                    tryPush(c, r + 1);
                    tryPush(c, r - 1);
                }
            }

            function tryPush(x: number, y: number) {
                if (x >= 0 && x < mask.width && y >= 0 && y < mask.height && !mask.get(x, y)) {
                    mask.set(x, y);
                    q.push([x, y]);
                }
            }
        }
    }
}