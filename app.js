
$(function(){
    // console.log('Jquery is working');
    $('#task-result').hide();

    $('#search').keyup(function(){
        if($('#search').val()){
            let search = $('#search').val();
            // console.log(sear ch);
            
            $.ajax({
                url : 'task-search.php',
                type: 'POST',
                data: {search},
                success: function(response){
                    // console.log(response);
                    let tasks = JSON.parse(response);
                    // console.log(tasks);
                    let template = '';
                    tasks.forEach(task => {
                        // console.log(task)
                        template += `<li>${task.name}</li>`
                    });
                    $('#container').html(template);
                    $('#task-result').show();

                }
            });
        }
    })

    $('#task-form').submit( function(e){
        // console.log('submiting');
        const postData = {
            name: $('#name').val(),
            description: $('#description').val(),
            // id: $('id').val(),
        }
        // console.log(postData);
        $.post('task-add.php',postData, function(response){
            console.log(response);
            $('#task-form').trigger('reset');
            // alert("response"); //doesnt work the alert
        });


        e.preventDefault();
    })

}) 