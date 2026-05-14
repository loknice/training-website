import { injectable } from 'inversify';
import { Fox, IFox } from '../models/fox';

// Клас-репозиторій для роботи з зайцями
// Анотація injectable дозволяє впровадити цей репозиторій через IoC контейнер
@injectable()
export class FoxRepository {
    // Метод для отримання всіх зайців з бази даних
    public async findAll(): Promise<IFox[]> {
        return Fox.find();
    }

    // Метод для пошуку зайця за унікальним ідентифікатором
    public async findById(id: string): Promise<IFox | null> {
        return Fox.findById(id);
    }

    // Метод для створення нового зайця в базі даних
    public async create(foxData: IFox): Promise<IFox> {
        const fox = new Fox(foxData);
        return fox.save();
    }

    // Метод для видалення зайця за ідентифікатором
    public async delete(id: string): Promise<boolean> {
        const result = await Fox.findByIdAndDelete(id);
        return result !== null;
    }

    // Метод для повного оновлення даних про зайця (заміна всіх полів)
    public async update(id: string, foxData: IFox): Promise<IFox | null> {
        return Fox.findByIdAndUpdate(id, foxData, { new: true });
    }

    // Метод для часткового оновлення даних про зайця (оновлення лише вказаних полів)
    public async patch(id: string, foxData: Partial<IFox>): Promise<IFox | null> {
        return Fox.findByIdAndUpdate(id, { $set: foxData }, { new: true });
    }
}
