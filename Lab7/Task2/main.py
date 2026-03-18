from models import Animal, Dog, Cat

def main():
    # создаём объекты
    animal = Animal("Generic", 5, "gray")
    dog = Dog("Rex", 3, "brown", "Shepherd")
    cat = Cat("Murka", 2, "white", 9)

    # список объектов
    animals = [animal, dog, cat]

    # проходимся по списку
    for a in animals:
        print(a)              # вызывает __str__
        print(a.info())       # общий метод
        print(a.speak())      # полиморфизм
        print("------")

    # уникальные методы
    print(dog.fetch())
    print(cat.scratch())


# запуск программы
if __name__ == "__main__":
    main()