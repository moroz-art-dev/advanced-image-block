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
import {
	useBlockProps,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
/**
 *
 */
import {
	Button,
	CustomSelectControl,
	ColorPalette,
	TextControl,
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
	const { message, color, size, image } = attributes;
	const [textValue, setTextValue] = useState(message ? message : "");
	const [colorValue, setColorValue] = useState(color ? color : "#000");
	const [fontSize, setFontSize] = useState(size ? size : options[0]);
	const handleTextChange = (val) => {
		setTextValue(val);
		setAttributes({ message: val });
	};
	const handleSelectChange = (val) => {
		setFontSize(val.key);
		setAttributes({ size: val.key });
	};
	const handleSelectColor = (val) => {
		setColorValue(val);
		setAttributes({ color: val });
	};
	const handleImageChange = ({ id, url, width, height, title: name }) => {
		setAttributes({
			image: {
				id,
				name,
				url,
				width,
				height,
			},
		});
	};
	const handleDeleteFile = () => {
		setAttributes({
			image: {},
		});
	};
	return (
		<div {...useBlockProps()}>
			{attributes.message &&
				!isSelected &&
				React.createElement(size, { style: { color: color } }, message)}
			{typeof attributes.image === "object" &&
			"url" in attributes.image &&
			!isSelected
				? React.createElement("img", { src: attributes.image.url }, null)
				: null}
			{(attributes.message ||
				(typeof attributes.image === "object" && "url" in attributes.image)) &&
			!isSelected ? null : (
				<>
					<TextControl
						label={__("Enter text", "advanced-image-block")}
						value={textValue}
						onChange={(val) => handleTextChange(val)}
					/>
					<CustomSelectControl
						__nextUnconstrainedWidth
						label={__("Choose a size:", "advanced-image-block")}
						options={options}
						onChange={({ selectedItem }) => handleSelectChange(selectedItem)}
						value={options.find((option) => option.key === fontSize)}
					/>
					<label>{__("Choose a color:", "advanced-image-block")}</label>
					<ColorPalette
						clearable={false}
						disableCustomColors
						colors={colors}
						value={colorValue}
						onChange={(colorValue) => handleSelectColor(colorValue)}
					/>
					<label>{__("Add image:", "advanced-image-block")}</label>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={({ id, url, width, height, title: name }) =>
								handleImageChange({ id, url, width, height, title: name })
							}
							allowedTypes={["image"]}
							render={({ open }) => (
								<Button variant="secondary" isPrimary onClick={open}>
									{__("Upload", "advanced-image-block")}
								</Button>
							)}
						/>
					</MediaUploadCheck>
					{typeof attributes.image === "object" && "url" in attributes.image ? (
						<Button
							variant="secondary"
							isPrimary
							onClick={() => handleDeleteFile()}
						>
							{__("Delete file", "advanced-image-block")}
						</Button>
					) : null}
				</>
			)}
		</div>
	);
}
