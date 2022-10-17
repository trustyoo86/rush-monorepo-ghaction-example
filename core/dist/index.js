class Counter {
    id;
    label;
    currentCount = 0;
    incrementAmount = 1;
    decrementAmount = 1;
}

class CreateCounterUsecase {
}
class CreateCounterUsecaseImpl {
    counterRepository;
    constructor(counterRepository) {
        this.counterRepository = counterRepository;
    }
    excute(...args) {
        return this.counterRepository.createCounter({
            id: Math.random().toString().substring(2),
            currentCount: 0,
            decrementAmount: 1,
            incrementAmount: 1,
            label: 'New Counter',
        });
    }
}

class CounterRepository {
}

export { Counter, CounterRepository, CreateCounterUsecase, CreateCounterUsecaseImpl };
