import React from 'react';

class StorePicker extends React.Component {
	render() {
		return (
			// know that you can only return one parent element
			// in this case, form.store-selector
			<form className="store-selection">
				<h2>Please Enter A Store</h2>
				{ /* this is an example of a JSX comment */ }
				{ /* JSX comments must go inside parent container */ }

				{ /* all self-closing tags need '/>' */ }
				<input type="text" required placeholder="Store Name"/>
				<button type="submit">Visit Store</button>
			</form>
		)
	}
}

export default StorePicker;