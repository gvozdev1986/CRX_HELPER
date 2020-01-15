document.getElementById("crxBtn").addEventListener("click", function () {
            window.open("http://localhost:4502/crx/de/index.jsp", '_blank');
    },
    false);

document.getElementById("adminBtn").addEventListener("click", function () {
                window.open("http://localhost:4502/aem/start.html", '_blank');
    },
    false);

    document.getElementById("damBtn").addEventListener("click", function () {
                    window.open("http://localhost:4502/assets.html/content/dam", '_blank');
        },
        false);

document.getElementById("print-result-request").addEventListener("click", function () {
        console.log("Print Page");

            var printWindow = window.open('', 'PRINT', 'height=400,width=600');
            var request = document.getElementById("url");

            printWindow.document.write('<html><head><title>RESPONSE</title>');
            printWindow.document.write('</head><body >');
            printWindow.document.write('<h1> REQUEST: ' + request.value.toLowerCase()  + '</h1>');
            printWindow.document.write(document.getElementById("response-editors").innerHTML);
            printWindow.document.write('</body></html>');

            printWindow.document.close(); // necessary for IE >= 10
            printWindow.focus(); // necessary for IE >= 10*/

            printWindow.print();
            printWindow.close();

            return true;
    }
)

document.getElementById("searchFiledResponse").addEventListener("keyup", function () {

                        var input = document.getElementById("searchFiledResponse");
                        var filter = input.value.toLowerCase();
                        var nodes = document.getElementsByClassName('response-editors');

                        for (i = 0; i < nodes.length; i++) {

                          if (nodes[i].innerText.toLowerCase().includes(filter)) {
                            nodes[i].style.color = "red";
                          } else {
                            nodes[i].style.color = "black";
                          }
                        }


    },
    false);
