#include <iostream>
#include <array>

using namespace std;

int minMoves = -1;
int rows, columns;

int verify(array<array<int, 5>, 5> &grid, array<int, 4> &locked, int moves){
    int verified = 1;
    int min = 0;
    int lastNum = 0;
    int lastWrong = 6;
    int erradas = 0;
    array<int, 5> nums = {0, 0, 0, 0, 0};
    //de cima para baixo
    for (int i = 0; i < rows; ++i){
        lastNum = grid[i][0];
        for (int j = 0; j < columns; ++j){
            if (grid[i][j] != i+1){
                verified = 0;
            }else{
                nums[i]++;
            }
            if(i < rows-1 && j < columns-1){
                int numErradas = (grid[i][j] != i+1) + (grid[i][j+1] != i+1) + (grid[i+1][j] != i+2) + (grid[i+1][j+1] != i+2);
                if(numErradas > 2){
                    erradas++;
                    if (erradas > moves){
                        return -1;
                    }
                }
            }
            if (grid[i][j] != lastNum){
                lastNum = 0;
            }
        }
        if (lastNum != 0 && lastNum != i+1 && lastWrong != i-1){
            min += columns;
            lastWrong = i;
            if (columns * abs(lastNum - i -1) > moves){
                return -1;
            }
            if (min > moves){
                return -1;
            }
        }
    }
    if (columns > 2){
        for (int i = 0; i < rows-1; ++i){
            if(nums[i] == columns){
                locked[i] = 1;
            }else{
                break;
            }
        }
        for(int i = rows-1; i >= 0; --i){
            if(nums[i] == columns){
                locked[i-1] = 1;
            }else{
                break;
            }
        }
    }
    return verified;
}

void rodarEsquerda(array<array<int, 5>, 5> &grid, int l, int c){
    int aux = grid[l][c];
    grid[l][c] = grid[l+1][c];
    grid[l+1][c] = grid[l+1][c+1];
    grid[l+1][c+1] = grid[l][c+1];
    grid[l][c+1] = aux;
}

void rodarDireita(array<array<int, 5>, 5> &grid, int l, int c){
    int aux = grid[l][c];
    grid[l][c] = grid[l][c+1];
    grid[l][c+1] = grid[l+1][c+1];
    grid[l+1][c+1] = grid[l+1][c];
    grid[l+1][c] = aux;
}

//fazer rotações utilizando recursão
void rodar(array<array<int, 5>, 5> &grid, int moves, int l, int c){
    if (moves <= minMoves){
        return;
    }

    array<int, 4> locked = {0, 0, 0, 0};
    int valid = verify(grid, locked, moves);

    if (moves >= 0 && valid == 1){
        minMoves = moves;
        return;
    }

    if (moves <= 0 || valid == -1){
        return;
    }

    for(int i = 0; i < rows -1; ++i){
        for (int j = 0; j < columns -1; ++j){
            if((l == i && c == j) || locked[i]){
                continue;
            }
            if(grid[i][j] == grid[i+1][j+1] && grid[i][j+1] == grid[i+1][j]){
                rodarDireita(grid, i, j);
                rodar(grid, moves-1, i, j);
                rodarEsquerda(grid, i, j);
            }else{
                rodarDireita(grid, i, j);
                rodar(grid, moves-1, i, j);

                rodarEsquerda(grid, i, j);
                rodarEsquerda(grid, i, j);
                rodar(grid, moves-1, i, j);

                rodarEsquerda(grid, i, j);
                rodar(grid, moves-2, i, j);

                rodarEsquerda(grid, i, j);
                rodarEsquerda(grid, i, j);
            }
        }
    }
}

int main(){
    int t = 0;
    cin >> t;
    for (int i = 0; i < t; ++i){ //Percorrer todos os casos
        minMoves = -1;
        int valid = 1;
        int moves;
        cin >> rows >> columns >> moves;
        //criar grid
        array<array<int, 5>, 5> grid = {0};
        array<int, 5> nums = {0, 0, 0, 0, 0};

        for (int j = 0; j < rows; ++j){
            for (int k = 0; k < columns; ++k){
                int num;
                cin >> num;
                //verificar se é possível
                if(num <= rows && num > 0){
                    nums[num-1]++;
                    if(nums[grid[j][k]-1] > columns){
                        valid = 0;
                        break;
                    }
                    grid[j][k] = num;
                }else{
                    valid = 0;
                    break;
                }
            }
        } //Verificar se é possível
        if (valid){
            rodar(grid, moves, -1, -1);
        }
        if (minMoves < 0 || minMoves > moves){
            cout << "the treasure is lost!\n";
        } else {
            cout << moves - minMoves << "\n";
        }
    }
    return 0;
}