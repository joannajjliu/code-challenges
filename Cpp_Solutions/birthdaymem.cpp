#include <iostream>
#include <iomanip>
#include <fstream>
#include <string>

using namespace std;

void removeDupWord(char str[])
{
    // Returns first token
    char *token = strtok(str, " ");

    // Keep printing tokens while one of the
    // delimiters present in str[].
    while (token != NULL)
    {
        printf("%s\n", token);
        token = strtok(NULL, " ");
    }
}

int main()
{
    std::string numLinesStr;
    std::getline(std::cin, numLinesStr);
    // int numLines = stoi(numLinesStr);

    int currLines = 0;

    char str[] = "Apples are red and not purple";
    removeDupWord(str);
    return 0;

    // std::string::size_type sz; // alias of size_t

    // double qualityOfLife = 0;
    // double numOfYrs = 0;
    std::string line;
    // double qaly = 0;

    // while (currLines < numLines)
    // {
    //     currLines += 1;
    //     std::getline(std::cin, line);
    //     qualityOfLife = std::stod(line, &sz);
    //     numOfYrs = std::stod(line.substr(sz));
    //     qaly += qualityOfLife * numOfYrs;
    // }
    // std::cout << qaly << std::endl;
}