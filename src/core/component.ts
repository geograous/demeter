// export interface IComponent {}

export default class Component {
  // 组件支持的事件
  private _events: Record<string, string> = {};
  name: string = "";
  renderComponent() {}
}
