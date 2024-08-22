const Logo = () => {
  return (
    <div className="cursor-pointer">
      <div className="flex items-end gap-3">
        <img src="/main_logo.svg" alt="T1.Дебют" width={100}/>
        <div className="font-bold text-3xl">
            Дебют
        </div>
      </div>
      <h1 className="w-full text-center text-xl text-slate-600 dark:text-slate-400">
        Продуктовый каталог
      </h1>
    </div>
  )
}

export default Logo