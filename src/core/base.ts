// import React from "react";
import Data from "./data";
import Event from "./event";

type Handler = (...args: any[]) => any | Promise<any>;

export class Core {
  // pub/sub
  private _events: Record<string, Event> = {};
  private _dataSources: Record<string, Data> = {};
  private _handlers: Record<string, Handler> = {};
  // 组件模型，不同组件存在不同模型
  private _component: any;
  private _state: any;
  // 用于组件嵌套
  private _children: any[] = [];
  on(name: string) {}
  off(name: string) {}
  trigger(name: string, ...args: any[]) {}
  //
  getStateFromDataSource(dataSources: Record<string, Data>) {}
  render(component: any, state: any, context: any) {}
}
