export function formatCNPJ(cnpj: string) {
	cnpj = cnpj.replace(/\D/g, '');
	cnpj = cnpj.replace(/^(\d{2})(\d)/, '$1.$2');
	cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
	cnpj = cnpj.replace(/\.(\d{3})(\d)/, '.$1/$2');
	cnpj = cnpj.replace(/(\d{4})(\d)/, '$1-$2');

	return cnpj;
}

export function onlyNumbers(value: string) {
	return value.replace(/\D/g, '');
}

export const formatPhoneNumber = (telefone: string): string => {
	telefone = telefone.replace(/\D/g, '');

	if (telefone.length >= 10) {
		telefone = telefone.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');
	} else if (telefone.length >= 6) {
		telefone = telefone.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
	} else if (telefone.length >= 2) {
		telefone = telefone.replace(/(\d{2})(\d{0,4})/, '($1) $2');
	}

	return telefone;
};

export function formatCEP(cep: string) {
	cep = cep.replace(/\D/g, '');
	cep = cep.replace(/^(\d{5})(\d)/, '$1-$2');
	return cep;
}
