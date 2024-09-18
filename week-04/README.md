## Task 1

1. Write a JavaScript function that returns a string that has letters in alphabetical order.

- Example string : 'webmaster'
- Expected Output : 'abeemrstw'

## Task 2

2. Write a JavaScript function that generates a string ID (specified length) of random characters.

## Task 3

3. Write a JavaScript function that checks whether a number is perfect.

- According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum).
- Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
- Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

## Task 4

არის ტანვარჯიშის ორი გუნდი: **დელფინები და კოალები**

- თითოეული გუნდი სამჯერ ასპარეზობს და მათი შედეგი გამოითვლება საშუალო არითმეტიკულით.
- გუნდი მოიგებს მხოლოდ იმ შემთხვევაში, თუ ორჯერ მეტი საშუალო ქულა ექნება მეორე გუნდთან შედარებით, სხვა შემთხვევაში არცერთი გუნდი არ იქნება მოგებული!

  1.1 შექმენი arrow ფუნქცია სახელად calcAverage და გამოითვალე 3 ასპარეზობის საშუალო არითმეტიკული. ამ ფუნქციას უნდა ჰქონდეს სამი პარამეტრი და უნდა დააბრუნოს ერთი რიცხვი(საშუალო არითმეტიკული).

  1.2 შექმენი ორი ცვლადი scoreDolphins და scoreKoalas, ამ ცვლადებს მიანიჭე მნიშვნელობად ფუნქცია calcAverage()

- შენ უნდა გამოიძახო ეს ფუნქცია და არგუმენტად გადასცე შეჯიბრების ქულები,
  რომელიც დაბლა data-ში წერია.

  1.3 შექმენი ფუნქცია checkWinner, რომელიც იღებს ორ პარამეტრს avgDolphins და avgKoalas ამ ფუნქციაში უნდა გაწეროთ ლოგიკა, თუ ერთი გუნდის საშუალო ართმეთმეტიკული ორჯერ მეტია, მეორე გუნდის საშუალო არითმეტიკულზე , გუნდი მოგებულია, თუ არცერთი არ აკმაყოფილებს ამ პირობას, ვერცერთი გუნდი ვერ მოიგებს. თუ რომელიმე გუნდმა მოიგო, დაბეჭდეთ ეს ტექსტი: Koalas win (30 vs. 13), თუ ვერცერთმა მოიგო No team wins...

  1.4 გამოიყენე checkWinner ფუნქცია, რომ გამოავლინო გამარჯვებული
  TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
  TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
