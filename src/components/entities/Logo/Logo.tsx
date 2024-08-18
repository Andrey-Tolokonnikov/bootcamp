const Logo = () => {
  return (
    <div className="cursor-pointer">
      <div className="flex items-end gap-3">
        <img src="main_logo.svg" alt="T1.Дебют" width={100}/>
        <div className="font-bold text-3xl">
            Дебют
        </div>
      </div>
      <div className="w-full text-center text-xl text-slate-600">
        Продуктовый каталог
      </div>
    </div>
  )
}

export default Logo