function setToday(id){
  const el = document.getElementById(id);
  if(el){ el.value = new Date().toISOString().slice(0,10); }
}
function showToast(message){
  const box = document.getElementById('prototypeToast');
  if(!box){ alert(message); return; }
  box.querySelector('.toast-body').textContent = message;
  $(box).toast({delay:2500});
  $(box).toast('show');
}
function demoSave(event, message){
  if(event) event.preventDefault();
  showToast(message || 'Data simulasi berhasil diproses. Prototype ini belum terhubung ke basis data.');
}

function setResponsiveLayout(){
  const isMobileOrTablet = window.innerWidth < 992;
  if(isMobileOrTablet){
    $('body').addClass('sidebar-collapse').removeClass('sidebar-open');
  }else{
    $('body').removeClass('sidebar-collapse sidebar-open');
  }
}

function wrapWideTables(){
  $('table').each(function(){
    const $table = $(this);
    if(!$table.parent().hasClass('table-responsive') && !$table.closest('.dataTables_wrapper').length){
      $table.wrap('<div class="table-responsive"></div>');
    }
  });
}

$(function(){
  setResponsiveLayout();
  wrapWideTables();
  $(window).on('resize orientationchange', setResponsiveLayout);
  $('[data-toggle="tooltip"]').tooltip();
  $('.datatable').DataTable({
    pageLength: 5,
    scrollX: true,
    autoWidth: false,
    language: {
      search: "Cari:",
      lengthMenu: "Tampilkan _MENU_ data",
      info: "Menampilkan _START_ sampai _END_ dari _TOTAL_ data",
      paginate: { previous: "Sebelumnya", next: "Berikutnya" },
      zeroRecords: "Data tidak ditemukan"
    }
  });
});
