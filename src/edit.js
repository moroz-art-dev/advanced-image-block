/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 *
 */
import {
	CustomSelectControl,
	ColorPalette,
	TextControl,
	FormFileUpload,
} from "@wordpress/components";
import { useState } from "@wordpress/element";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

export default function Edit({ attributes, isSelected, setAttributes }) {
	const options = [
		{
			key: "h1",
			name: "h1",
			style: { fontSize: "2em", margin: ".67em 0" },
		},
		{
			key: "h2",
			name: "h2",
			style: { fontSize: "1.5em", margin: ".75em 0" },
		},
		{
			key: "h3",
			name: "h3",
			style: { fontSize: "1.17em", margin: ".83em 0" },
		},
		{
			key: "h4",
			name: "h4",
			style: { fontSize: "1em", margin: "1em 0" },
		},
		{
			key: "h5",
			name: "h5",
			style: { fontSize: ".83em", margin: "1.5em 0" },
		},
		{
			key: "h6",
			name: "h6",
			style: { fontSize: ".75em", margin: "1.67em 0" },
		},
	];
	const colors = [
		{ name: "black", color: "#000" },
		{ name: "red", color: "#f00" },
		{ name: "white", color: "#fff" },
		{ name: "blue", color: "#00f" },
	];
	// Simplify access to attributes
	const { message, color, size, img } = attributes;
	const [imageValue, setImageValue] = useState(img ? img : []);
	const [textValue, setTextValue] = useState(message ? message : "");
	const [colorValue, setColorValue] = useState(color ? color : "#000");
	const [fontSize, setFontSize] = useState(size ? size : options[0]);
	{
		console.log("imageValue", imageValue);
	
	}
	const handleTextChange = (val) => {
		setTextValue(val);
		generatorMessage();
		setAttributes({ message: val });
	};
	const handleSelectChange = (val) => {
		setFontSize(val.key);
		generatorMessage();
		setAttributes({ size: val.key });
	};
	const handleSelectColor = (val) => {
		setColorValue(val);
		generatorMessage();
		setAttributes({ color: val });
	};
	const handleImageChange = (event) => {
		if (event.target.files) {
			setImageValue(event.target.files);
			setAttributes({ image: event.target.files });
		}
		console.log(event.target.files);
	};
	return (
		<div {...useBlockProps()}>
			<TextControl
				label="Enter text"
				value={textValue}
				onChange={(val) => handleTextChange(val)}
			/>
			<CustomSelectControl
				__nextUnconstrainedWidth
				label="Choose a size:"
				options={options}
				onChange={({ selectedItem }) => handleSelectChange(selectedItem)}
				value={options.find((option) => option.key === fontSize)}
			/>
			<label>Choose a color:</label>
			<ColorPalette
				clearable={false}
				disableCustomColors
				colors={colors}
				value={colorValue}
				onChange={(colorValue) => handleSelectColor(colorValue)}
			/>
			<label>Add image:</label>
			<FormFileUpload
				multiple={false}
				accept="image/*"
				onChange={(event) => handleImageChange(event)}
			>
				Upload
			</FormFileUpload>
		</div>
	);
}
