/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import DecoupledEditorBase from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import ListProperties from '@ckeditor/ckeditor5-list/src/listproperties';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';
import GeneralHtmlSupport from '@ckeditor/ckeditor5-html-support/src/generalhtmlsupport';

export default class DecoupledEditor extends DecoupledEditorBase {}

// Plugins to include in the build.
DecoupledEditor.builtinPlugins = [
	Essentials,
	Alignment,
	FontSize,
	FontFamily,
	FontColor,
	FontBackgroundColor,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	Strikethrough,
	Underline,
	BlockQuote,
	CKFinder,
	CloudServices,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	Link,
	List,
	ListProperties,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation,
	GeneralHtmlSupport,
];

// Editor configuration.
DecoupledEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'fontfamily',
			'fontsize',
			'fontColor',
			'fontBackgroundColor',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'|',
			'alignment',
			'|',
			'numberedList',
			'bulletedList',
			'|',
			'outdent',
			'indent',
			'|',
			'link',
			'blockquote',
			'uploadImage',
			'insertTable',
			'mediaEmbed',
			'|',
			'undo',
			'redo',
		],
	},
	image: {
		resizeUnit: '%',
		toolbar: [
			'imageStyle:inline',
			'imageStyle:wrapText',
			'imageStyle:breakText',
			'|',
			'toggleImageCaption',
			'imageTextAlternative',
		],
	},
	table: {
		contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
	},
	heading: {
		options: [
			{
				model: 'paragraph',
				title: 'Paragraph',
				class: 'ck-heading_paragraph',
			},
			{
				model: 'heading1',
				view: 'h1',
				title: 'Heading 1',
				class: 'ck-heading_heading1',
			},
			{
				model: 'heading2',
				view: 'h2',
				title: 'Heading 2',
				class: 'ck-heading_heading2',
			},
			{
				model: 'heading3',
				view: 'h3',
				title: 'Heading 3',
				class: 'ck-heading_heading3',
			},
			{
				model: 'heading4',
				view: 'h4',
				title: 'Heading 4',
				class: 'ck-heading_heading4',
			},
			{
				model: 'heading5',
				view: 'h5',
				title: 'Heading 5',
				class: 'ck-heading_heading5',
			},
			{
				model: 'heading6',
				view: 'h6',
				title: 'Heading 6',
				class: 'ck-heading_heading6',
			},
		],
	},
	list: {
		properties: {
			styles: true,
			startIndex: true,
			reversed: true,
		},
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en',
	htmlSupport: {
		allow: [
			{
				name: 'p',
				styles: 'text-indent',
			},
		],
	},
};
DecoupledEditor.create('')
	.then((editor) => {
		window.editor = editor;
		document
			.querySelector('.toolbar-container')
			.appendChild(editor.ui.view.toolbar.element);
		document
			.querySelector('.editable-container')
			.appendChild(editor.ui.view.editable.element);

		// 图片上传适配器
		editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
			return {
				upload: async () => {
					// 读取图片
					return await loader.file
						.then((f) => {
							const F = new FileReader();
							F.readAsArrayBuffer(f);
							return new Promise((resolve) => {
								F.onload = () => {
									resolve({ bufAsArray: F.result, file: f });
								};
							});
						})
						.then(async (v) => {
							const uploadRes = await uploadApi({ file: v.file });

							if (uploadRes.code === '0') {
								const info = uploadRes.data;
								const path =
									'https://files.atfusion.cn/' + info[ 0 ].path;
								that.imgPath = path;
							}
							return {
								default: that.imgPath,
							};
						});
				},
			};
		};
	})
	.catch((error) => {
		console.error('There was a problem initializing the editor.', error);
	});

function uploadApi(file) {
	return new Promise((resolve, reject) => {
		const formData = new FormData();
		formData.append('file', file);
		const request = new XMLHttpRequest();
		request.onreadystatechange = () => {
			if (request.readyState === 4 && request.status === 200) {
				const result = JSON.parse(request.responseText);
				resolve(result);
			}
		};
		request.open('POST', 'https://api.atfusion.cn/zuul/dfs/userFile/uploadFile'); // 填入请求的url
		request.setRequestHeader('at-industryid', '4');
		request.setRequestHeader('at-openid', '04df4d434d481c5bb723be1b6df1ee65');
		request.setRequestHeader('at-token', '6f7463585c85ab0fa4a353f5a67d52afc74401ba0a2879f2beabc870e' +
		'0e7d1b323ea040bf3035b2c67887a56bfe8c1206edf7b84dec83b13bb0344f869543ea9e5e827379748dede721db56b0d6f081d3107' +
		'a806b087c84d65b5546a18211c604a3c23efcd86f714f8a7b80d08d6af666c224a577f46355dab3e9d1bf93c5ab4b72c8af33c5da66675dd' +
		'78c59f5134b1ca54ac8524cb45342d7e14c32332b34083ae9ef3e93bf2cf');
		request.setRequestHeader('at-appclient', '3437');
		request.onerror = () => {
			reject(new Error('请求失败！'));
		}; // 发送请求
		request.send(formData);
	});
}
