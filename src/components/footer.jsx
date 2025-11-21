import { memo } from "react";
function Footer() {
  return (
    <div className="flex items-center justify-center w-full h-15 border-t-1 text-white mt-auto max-md:p-15">
      <span className="text-white max-sm:text-xs">
        © 2025 Catálogo de Vendas • Desenvolvido para testes
      </span>
    </div>
  );
}

export default memo(Footer);
