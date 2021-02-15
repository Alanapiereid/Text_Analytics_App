

function myAnalytics() {
    var sent = document.getElementById("sent").value;
    var text_out = []      
    var splitsent = sent.split(" ");
    let doc = nlp(splitsent)
    let json = doc.json()

    document.getElementById("printstate").innerHTML = "Here is a breakdown of text analytics for your text:"

    for (var i = 0; i < json.length; i++) {
        terms = json[i].terms;
        for(var j=0; j < terms.length; j++) {
            output = terms[j].text + " -> " + terms[j].tags;
        }
        //result = JSON.stringify(json[i].terms, null, 2)
        var node = document.createElement("LI");
        var textnode = document.createTextNode(output);
        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node);
    
    }
    // var result=JSON.stringify(json[i].terms, null, 2)

    }


    


