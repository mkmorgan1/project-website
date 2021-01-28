import $ from 'jquery';

export const clicked = (value) => {
  $.ajax({
    type: "POST",
    url: `/data?link=${value}`,
    data: 'hello',
    success: () => {
      console.log('sucess');
    },
    dataType: 'text'
  });
  console.log('here');
}