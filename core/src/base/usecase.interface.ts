export abstract class Usecase<T> {
  abstract excute(...args: any[]): T;
}