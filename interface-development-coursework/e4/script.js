$(window).on("load" , start)

function start(){

    $.getJSON(
        "csvjson.json",
        success
    );   
}

function success (data){

    $.each(
        data,
        insert 
    );

     $('table').DataTable();
}

function insert(index, obj){

    $("tbody").append(`
     <tr>
         <td>${obj.author}</td>
         <td>${obj.location}</td>
         <td>
            <a 
                 href="${obj.url}" 
                 data-featherlight="image"
            >
                 <img 
                 style="height:100px"
                 src="${obj.url}"
                 />
         </td>
    </tr>
    `);
}