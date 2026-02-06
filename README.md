Jak uruchomić DataTables

Umieść pliki:
-index.html
-script.js
-studenci.json
w jednym katalogu.
Otwórz projekt przez lokalny serwer (wymagane do działania AJAX), np.:
Live Server w Visual Studio Code
lub
http://localhost/...
Po uruchomieniu index.html tabela DataTables załaduje dane automatycznie z pliku studenci.json.
Inicjalizacja DataTables

Tworzy interaktywną tabelę na podstawie zwykłej tabeli HTML.
Przykład:
const table = $('#Table').DataTable({
    // konfiguracja
});
2. AJAX – ładowanie danych z pliku JSON
Dane są pobierane dynamicznie z pliku studenci.json.
Przykład:
ajax: {
    url: 'studenci.json',
    dataSrc: ''
}
3. Definicja kolumn (columns)
Mapowanie danych z pliku JSON na kolumny tabeli.
Przykład:
columns: [
    { data: 'id' },
    { data: 'imie' },
    { data: 'nazwisko' },
    { data: 'wiek' },
    { data: 'email' },
    { data: 'kierunek' }
]
4. Renderowanie własnych przycisków (render)
Dodanie przycisków Edytuj i Usuń do wierszy.
Przykład:
render: () => '<button class="edit">Edytuj</button>'
5. Stronicowanie i liczba rekordów
Ustawienie liczby wyświetlanych rekordów na stronie.
Przykład:
lengthMenu: [10, 25, 50],
pageLength: 10
6. Buttons – eksport danych
Eksport danych tabeli do plików CSV i PDF.
Przykład CSV:
{
    extend: 'csvHtml5',
    text: 'Eksport CSV',
    exportOptions: { columns: [0,1,2,3,4,5] }
}
Przykład PDF:
{
    extend: 'pdfHtml5',
    text: 'Eksport PDF',
    orientation: 'landscape'
}
7. Lokalizacja językowa
Zmiana języka interfejsu na polski.
Przykład:
language: {
    url: '//cdn.datatables.net/plug-ins/1.10.21/i18n/Polish.json'
}
8. Pobieranie danych wiersza (row().data())
Odczyt danych wybranego wiersza podczas edycji.
Przykład:
const row = table.row($(this).parents('tr'));
const data = row.data();
9. Aktualizacja danych wiersza
Zapis zmodyfikowanych danych i odświeżenie tabeli.
Przykład:
row.data(data).draw();
10. Usuwanie wiersza
Usunięcie wybranego rekordu z tabeli.
Przykład:
table.row($(this).parents('tr')).remove().draw();
