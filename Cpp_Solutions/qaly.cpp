#include <iostream>
#include <iomanip>
#include <fstream>
#include <string>

using namespace std;

int main()
{
    std::string numLinesStr;
    std::getline(std::cin, numLinesStr);
    int numLines = stoi(numLinesStr);
    // std::cout << "number of lines is: " << numLines << std::endl;

    int currLines = 0;

    std::string delimiter = " ";
    std::string::size_type sz; // alias of size_t

    double qualityOfLife = 0;
    double numOfYrs = 0;
    std::string line;
    double qaly = 0;

    while (currLines < numLines)
    {
        currLines += 1;
        std::getline(std::cin, line);
        qualityOfLife = std::stod(line, &sz);
        numOfYrs = std::stod(line.substr(sz));
        qaly += qualityOfLife * numOfYrs;
        // std::cout << "current line is: " << line << " qualityOfLife: " << qualityOfLife << " numOfYrs: " << numOfYrs << std::endl;
    }
    std::cout << qaly << std::endl;
    // string line;
    // while ((line = Console.ReadLine()) != null)
    // {
    //     string[] split = line.Split(new char[]{' '}, StringSplitOptions.None);
    //     long a = Int64.Parse(split[0]);
    //     long b = Int64.Parse(split[1]);
    //     /// solve test case and output answer
    // }

    // int qaly = 0;
    // int x;
    // ifstream inFile;

    // inFile.open("1.ans");
    // if (!inFile)
    // {
    //     cout << "Unable to open file";
    //     exit(1); //terminate with error
    // }

    // while (inFile >> x)
    // {
    //     qaly = qaly + x;
    // }

    // inFile.close();
    // cout << "Sum = " << qaly << endl;
    // return 0;
}