import { twMerge } from "tailwind-merge"

export const cx = twMerge

export const copyTextToClipboard = (text?: string) => {
	if (!text) return
	if (!navigator.clipboard) {
		const textArea = document.createElement('textarea')
		textArea.value = text
		textArea.style.top = '0'
		textArea.style.left = '0'
		textArea.style.position = 'fixed'
		document.body.appendChild(textArea)
		textArea.focus()
		textArea.select()
		document.execCommand('copy')
		document.body.removeChild(textArea)
		return
	}
	navigator.clipboard.writeText(text)
}

export const removeVietnameseTones = (str: string) => {
	return str
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/đ/g, 'd')
		.replace(/Đ/g, 'D')
}
