// retrieve the CSV file using fetch()
fetch('names.csv')
  .then(response => response.text())
  .then(data => {
    // convert CSV data into an array of objects
    const csvRows = data.trim().split('\n');
    const headers = csvRows[0].split(',');
    const records = csvRows.slice(1).map(row => {
      const values = row.split(',');
      return headers.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
    });

		const fonts = ['Delius', 'Stalemate', 'Cedarville Cursive', 'Reenie Beanie', ]

    // get DOM element to update
    const domElement = document.getElementById('nametext');

    // update DOM every 10 seconds with random record
    setInterval(() => {
      // select random record
      const randomIndex1 = Math.floor(Math.random() * records.length);
			const randomIndex2 = Math.floor(Math.random() * fonts.length);
      const record = records[randomIndex1];
			const font = fonts[randomIndex2];

      // update DOM element with record value
      domElement.style.opacity = 0;
			domElement.style.fontFamily = font
      setTimeout(() => {
        domElement.innerHTML = record['name'];
        domElement.style.opacity = 1;
      }, 500);
    }, 8000);
  });
