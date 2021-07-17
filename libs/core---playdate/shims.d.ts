// Auto-generated. Do not edit.
declare namespace control {

    /**
     * Determines if the USB has been enumerated.
     */
    //% shim=control::isUSBInitialized
    function isUSBInitialized(): boolean;
}
declare namespace control {

    /**
     * Announce that an event happened to registered handlers.
     * @param src ID of the MicroBit Component that generated the event
     * @param value Component specific code indicating the cause of the event.
     */
    //% weight=21 blockGap=12 blockId="control_raise_event"
    //% help=control/raise-event
    //% block="raise event|from %src|with value %value" blockExternalInputs=1 shim=control::raiseEvent
    function raiseEvent(src: int32, value: int32): void;

    /**
     * Determine the version of system software currently running.
     */
    //% blockId="control_device_dal_version" block="device dal version"
    //% help=control/device-dal-version shim=control::deviceDalVersion
    function deviceDalVersion(): string;

    /**
     * Allocates the next user notification event
     */
    //% help=control/allocate-notify-event shim=control::allocateNotifyEvent
    function allocateNotifyEvent(): int32;

    /** Write a message to DMESG debugging buffer. */
    //% shim=control::dmesg
    function dmesg(s: string): void;

    /** Write a message and value (pointer) to DMESG debugging buffer. */
    //% shim=control::dmesgPtr
    function dmesgPtr(str: string, ptr: Object): void;
}

// Auto-generated. Do not edit. Really.
