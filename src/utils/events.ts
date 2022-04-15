import EventEmitter3 from "eventemitter3";
import {EventTypes} from "src/utils/event-types";

interface Params<Payload> {
  name: EventTypes;
  handler: (payload: Payload) => void;
}

class EventMediatorImpl {
  private emitter: EventEmitter3;

  public constructor({emitter}: {emitter: EventEmitter3}) {
    this.emitter = emitter;
  }

  public subscribe<Payload>({handler, name}: Params<Payload>): void {
    this.emitter.addListener(name, handler);
  }

  public unsubscribe<Payload>({handler, name}: Params<Payload>): void {
    this.emitter.removeListener(name, handler);
  }

  public send<Payload>(name: EventTypes, payload?: Payload): void {
    this.emitter.emit(name, payload);
  }
}

export const EventMediator = new EventMediatorImpl({
  emitter: new EventEmitter3(),
});
