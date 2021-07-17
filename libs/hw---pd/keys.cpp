#include "pxt.h"

namespace pxt {

enum class Key {
    LEFT = 1,
    UP,
    RIGHT,
    DOWN,
    A,
    B,
    MENU,
    LEFT2,
    UP2,
    RIGHT2,
    DOWN2,
    A2,
    B2,
    RESET,
    EXIT,
};

#define SET(s) r |= 1 << (int)(Key::s)
#define KEY(s, m)                                                                                  \
    if (current & m)                                                                               \
    SET(s)

static uint32_t state;

static uint32_t readBtns() {
    uint32_t r = 0;

    PDButtons current, pushed, released;
    playdate->system->getButtonState(&current, &pushed, &released);

    current = (PDButtons)(current | pushed); // in case they are already released

    KEY(A, kButtonA);
    KEY(B, kButtonB);
    KEY(LEFT, kButtonLeft);
    KEY(RIGHT, kButtonRight);
    KEY(UP, kButtonUp);
    KEY(DOWN, kButtonDown);

    return r;
}

//% expose
int pressureLevelByButtonId(int btnId, int codalId) {
    return (state & (1 << btnId)) ? 512 : 0;
}

uint32_t updateKeyEvents() {
    uint32_t nstate = readBtns();
    if (state == nstate || codal::EventModel::defaultEventBus == NULL)
        return nstate;

    for (int i = 1; i < 32; ++i) {
        uint32_t mask = 1 << i;
        int ev = 0;
        if ((state & mask) && !(nstate & mask))
            ev = PXT_INTERNAL_KEY_UP;
        else if (!(state & mask) && (nstate & mask)) {
            ev = PXT_INTERNAL_KEY_DOWN;
        }
        if (ev) {
            // DMESG("evt: %d at %d", ev, i);
            Event(ev, i);
            Event(ev, 0); // any key
        }
    }
    state = nstate;
    return state;
}

//% expose
void setupButton(int buttonId, int key) {
    (void)buttonId;
    (void)key;
    // not needed on RPi
}

} // namespace pxt
