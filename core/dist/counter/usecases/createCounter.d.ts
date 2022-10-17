import { Usecase } from '../../base/usecase.interface';
import { Counter } from '../entities/counter.entity';
import { CounterRepository } from '../counter-repository.interface';
export declare abstract class CreateCounterUsecase implements Usecase<Counter> {
    abstract excute(...args: any[]): Counter;
}
export declare class CreateCounterUsecaseImpl implements CreateCounterUsecase {
    private counterRepository;
    constructor(counterRepository: CounterRepository);
    excute(...args: any[]): Counter;
}
