/**
 * Created by Tony on 5/28/14.
 */

function openxml(xmlhttp, filename) {
    xmlhttp.open("GET",filename,false);
    xmlhttp.send();

    xmlDoc=xmlhttp.responseXML;

    return xmlDoc;
}

function getentity(xmlDoc, entityname) {
    var x=xmlDoc.getElementsByTagName(entityname);

    return x;
}

function getattribute(entity, propertyname) {
    var x=entity.getAttribute(propertyname);

    return x;
}
