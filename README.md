# node.js-1
README
Program 1
Ten program używa frameworka Express.js do stworzenia serwera i definiuje endpoint pod adresem /recruitment/json-structure. Gdy wykonane zostanie żądanie GET do tego endpointu, serwer odpowiada strukturą danych w formacie JSON. Struktura zawiera listę elementów oraz wartość correctly_result.

Aby uruchomić program, wykonaj następujące kroki:

1.Zainstaluj Node.js na swoim systemie.
2.Zainstaluj wymagane zależności, wykonując polecenie npm install w katalogu programu.
3.Uruchom serwer, wykonując polecenie node app1.js lub npm start w katalogu programu.
4.Serwer rozpocznie działanie na porcie 3000, a endpoint będzie dostępny pod adresem http://localhost:3000/recruitment/json-structure.

Program 2
Ten program również używa frameworka Express.js do stworzenia serwera i definiuje endpoint pod adresem /recruitment/random-json-structure. Gdy wykonane zostanie żądanie GET do tego endpointu, serwer generuje losową strukturę danych w formacie JSON. Struktura zawiera listę elementów oraz wartość correctly_result. Lista zawiera losową liczbę elementów, a każdy element ma nazwę zawierającą losową liczbę.

Aby uruchomić program, wykonaj następujące kroki:

1.Zainstaluj Node.js na swoim systemie.
2.Zainstaluj wymagane zależności, wykonując polecenie npm install w katalogu programu.
3.Uruchom serwer, wykonując polecenie node app2.js lub npm start w katalogu programu.
4.Serwer rozpocznie działanie na porcie 3001, a endpoint będzie dostępny pod adresem http://localhost:3001/recruitment/random-json-structure.

Testy jednostkowe
Ten program zawiera testy jednostkowe dla endpointów zdefiniowanych w Programie 1 i Programie 2. Testy są implementowane przy użyciu biblioteki supertest. Testy sprawdzają, czy endpointy zwracają oczekiwaną strukturę JSON oraz sprawdzają poprawność zwróconych danych.

Aby uruchomić testy jednostkowe, wykonaj następujące kroki:

1.Zainstaluj Node.js na swoim systemie.
2.Zainstaluj wymagane zależności, wykonując polecenie npm install w katalogu programu.
3.Uruchom testy, wykonując polecenie npm test w katalogu programu.
4.Testy zostaną wykonane, a wyniki zostaną wyświetlone w konsoli.
5.Uwaga: Przed uruchomieniem testów upewnij się, że odpowiednie serwery (Program 1 i Program 2) działają na określonych portach (3000 i 3001).

W razie pytań lub potrzeby dalszej pomocy, proszę o kontakt.
