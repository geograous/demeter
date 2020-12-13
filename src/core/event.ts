// export interface IEvent {}

export default class Event {
  private name: string = "";
  private target: any;
  // private targets: any[] = [];
  emit(name: string, ...args: any[]) {}
}
