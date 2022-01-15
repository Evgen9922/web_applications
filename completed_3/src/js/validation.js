(()=>{

	const VALID_OBJ = {

		rules: {
			name: {
				required: true,
				minLength: 2,
				maxLength: 25,
			},
	
			email: {
				required: true,
				email: true,
			}
		},
	}

	new JustValidate('.contacts__form', {
		colorWrong: '#FF3030',

		messages: {
			name: {
				required: 'Неверный формат имени!',
				minLength: 'Имя должно содержать не менее 2-х символов',
			},
	
			email: {
				email: 'Недопустимый формат',
				required: 'Недопустимый формат!'
			}
		}

	},

	 VALID_OBJ
);

	new JustValidate('.about-studio__form', {
		colorWrong: '#F06666',

		messages: {
			email: {
				email: 'Недопустимый формат',
				required: 'Недопустимый формат!'
			}
		}

	},
	 VALID_OBJ
)


 
})();


