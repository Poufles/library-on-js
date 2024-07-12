const btn_add = document.querySelector('.card.add');

const customize_book_title = document.querySelector('.modal .title-author-container>#title');
const customize_book_author = document.querySelector('.modal .title-author-container>#author');
const customize_book_genre = document.querySelector('.modal .genre-container>#genre');
const customize_book_status = document.querySelector('.modal .status-container .status');
const customize_book_color = document.querySelector('.modal .card');
const modal_input_book_property = document.querySelectorAll('.input-container');
const modal_book_property_title_input = document.querySelector('.input-book-title input');
const modal_book_property_author_input = document.querySelector('.input-book-author input');
const modal_book_property_label = document.querySelector('.select-container .text');
const modal_book_property_select = document.querySelector('.select-container select');
const modal_book_property_status = document.querySelectorAll('.status-choice label');
const modal_book_property_color = document.querySelectorAll('.color-palette input');
const modal_add_book = document.querySelector('.modal');
const modal_buttons = document.querySelectorAll('.modal .btn')
const modal_btn_close = document.querySelector('.modal .cancel');
const modal_btn_reset = document.querySelector('.modal .reset');
const modal_btn_add = document.querySelector('.modal .add');

const bookLibrary = new Array();

const status_color = {
    read : '#dd2525',
    oread : '#ffff3b',
    nread : '#34783a'
};
