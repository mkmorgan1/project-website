import $ from 'jquery';

export const clicked = (value, callback = ()=>{}) => {
  $.ajax({
    type: "POST",
    url: `/data?link=${value}`,
    dataType: 'text',
    success: callback
  });
}
