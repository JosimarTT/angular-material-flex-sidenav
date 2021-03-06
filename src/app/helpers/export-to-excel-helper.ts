export const JSONToCSV = (
  JSONData: any[],
  ReportTitle: string,
  ShowLabel: boolean,
) => {
  // If JSONData is not an object then JSON.parse will parse the JSON string in an Object
  const arrData =
    typeof JSONData !== 'object' ? JSON.parse(JSONData) : JSONData;
  console.log('arrData');
  console.log(arrData);
  let CSV = 'sep=,\r\n';

  // This condition will generate the Label/Header
  if (ShowLabel) {
    let row = '';

    // This loop will extract the label from 1st index of on array
    Object.keys(arrData[0]).forEach((key) => {
      row += `${key},`;
    });

    row = row.slice(0, -1);

    // append Label row with line break
    CSV += `${row}\r\n`;
  }

  // 1st loop is to extract each row
  Object.values(arrData).forEach((value) => {
    let row = '';
    // 2nd loop will extract each column and convert it in string comma-seprated
    Object.values(value).forEach((subValue) => {
      row += `"${subValue}",`;
    });

    row.slice(0, row.length - 1);

    // add a line break after each row
    CSV += `${row}\r\n`;
  });

  if (CSV === '') {
    return;
  }

  // Generate a file name
  let fileName = '';
  // this will remove the blank-spaces from the title and replace it with an underscore
  fileName += ReportTitle.replace(/ /g, '_');

  // Initialize file format you want csv or xls
  const uri = `data:text/csv;charset=utf-8,${escape(CSV)}`;

  // Now the little tricky part.
  // you can use either>> window.open(uri);
  // but this will not work in some browsers
  // or you will not get the correct file extension

  // this trick will generate a temp <a /> tag
  const link = document.createElement('a');
  link.href = uri;

  // set the visibility hidden so it will not effect on your web-layout
  // link.style = "visibility:hidden";
  link.download = `${fileName}.csv`;

  // this part will append the anchor tag and remove it after automatic click
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
