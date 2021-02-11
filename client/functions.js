import $ from 'jquery';

export const clicked = (value) => {
  $.ajax({
    type: "POST",
    url: `/data?link=${value}`,
    dataType: 'text'
  });
}
