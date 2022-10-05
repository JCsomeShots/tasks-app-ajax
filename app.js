
$(function(){
    // console.log('Jquery is working');
    $('#task-result').hide();

    $('#search').keyup(function(e){
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

}) 