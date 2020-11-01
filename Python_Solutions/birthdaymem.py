# msg = "Hello World"
# print(msg.split())


class Person:
    def __init__(self, name, priority, birthday):
        self.name = name
        self.priority = int(priority)
        self.birthday = birthday

    def sameBirthday(self, other):
        return self.birthday == other.birthday

    def isSelfHigherPriority(self, other):
        return self.priority > other.priority

    def printPerson(self):
        print(self.name + ' ' + str(self.priority) + ' ' + self.birthday)


numberList = []
n = int(input())

for i in range(0, n):
    userInput = (input()).split()
    person = Person(userInput[0], userInput[1], userInput[2])
    # person.printPerson()
    if (i != 0):
        print("initial len(numberList)", len(numberList))
        for j in range(0, len(numberList) - 1):
            if numberList[j].sameBirthday(person):
                if numberList[j].isSelfHigherPriority(person):
                    break
                else:
                    numberList[j] = person
                    break
                break
            elif j == len(numberList) - 2:
                numberList.append(person)
                break
    else:
        numberList.append(person)

print("len(numberList):", len(numberList))

for i in range(0, len(numberList)):
    numberList[i].printPerson()

# print("User list is ", numberList[0].priority)

# if numberList[0].sameBirthday(numberList[1]):
#     print("YES the SAME")
