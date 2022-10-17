import { Counter } from './entities/counter.entity';
export declare abstract class CounterRepository {
    abstract createCounter(counterInfo: Counter): Counter;
}
