1. Napisz funkcję która zwróci obiekt zawierający najmniejszą i największą temperatuę spośród podanych.
   Funkcja jako argument przyjmuje tablicę temperatur.

2. Napisz funkcję która przyjmuje dowolną ilość argumentów które są tablicami. Funkcja zwraca wszystkie tablice połączone w jedną. Np.
   mergeArrays([1,2,3], [4,5,6], [7,6,8]) zwroci tablice
   [1,2,3, 4,5,6, 7,6,8]

3. Napisz funkcje ktora przyjmuje jako pierwszy argument dowolny obiekt, jako drugi element tablice z kluczami jakie chcemy z tego obiektu zwrocic. Funkcja zwraca obiekt tylko z podanymi kluczami. Np.

const obj = foo({
name: 'piotr',
lastname: 'nowak',
age: 21
}, ['lastname', 'age'])

Obiekt obj powiniej wyglądąć:
{
lastname: 'nowak',
age: 21
}
