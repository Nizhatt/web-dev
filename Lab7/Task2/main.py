from models import Animal, Dog, Cat

def main():

    animal = Animal("Generic", 5, "gray")
    dog = Dog("Rex", 3, "brown", "Shepherd")
    cat = Cat("Murka", 2, "white", 9)

    animals = [animal, dog, cat]

    for a in animals:
        print(a)              # вызывает str
        print(a.info())       # общий метод
        print(a.speak())      # полиморфизм
        print("------")

    # уникальные методы
    print(dog.fetch())
    print(cat.scratch())

if __name__ == "__main__":
    main()