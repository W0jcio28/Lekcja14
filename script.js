$(document).ready(function () {
	const table = $('#Table').DataTable({
		ajax: {
			url: 'studenci.json',
			dataSrc: '',
		},

		lengthMenu: [10, 25, 50],
		pageLength: 10,

		columns: [
			{ data: 'id' },
			{ data: 'imie' },
			{ data: 'nazwisko' },
			{ data: 'wiek' },
			{ data: 'email' },
			{ data: 'kierunek' },
			{
				data: null,
				render: () => '<button class="edit">Edytuj</button>',
			},
			{
				data: null,
				render: () => '<button class="delete">Usuń</button>',
			},
		],

		dom: 'Blfrtip',
		buttons: [
			{
				extend: 'csvHtml5',
				text: 'Eksport CSV',
				filename: 'studenci',
				exportOptions: { columns: [0, 1, 2, 3, 4, 5] },
			},
			{
				extend: 'pdfHtml5',
				text: 'Eksport PDF',
				filename: 'studenci',
				title: 'Lista studentów',
				orientation: 'landscape',
				pageSize: 'A4',
				exportOptions: { columns: [0, 1, 2, 3, 4, 5] },
			},
		],

		language: {
			url: '//cdn.datatables.net/plug-ins/1.10.21/i18n/Polish.json',
		},
	})

	$('#Table tbody').on('click', '.edit', function () {
		const row = table.row($(this).parents('tr'))
		const data = row.data()

		const imie = prompt('Imię:', data.imie)
		if (imie === null) return

		const nazwisko = prompt('Nazwisko:', data.nazwisko)
		if (nazwisko === null) return

		const wiek = prompt('Wiek:', data.wiek)
		if (wiek === null || isNaN(wiek)) return alert('Nieprawidłowy wiek')

		const email = prompt('Email:', data.email)
		if (email === null) return

		const kierunek = prompt('Kierunek studiów:', data.kierunek)
		if (kierunek === null) return

		data.imie = imie
		data.nazwisko = nazwisko
		data.wiek = wiek
		data.email = email
		data.kierunek = kierunek

		row.data(data).draw()
	})

	$('#Table tbody').on('click', '.delete', function () {
		table.row($(this).parents('tr')).remove().draw()
	})
})

