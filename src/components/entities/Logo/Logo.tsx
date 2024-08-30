const Logo = () => {
  return (
    <div className="cursor-pointer scale-[.8]">
      <div className="relative flex items-end gap-3">
        <img src="/main_logo_dark.svg" alt="T1.Дебют" className={"absolute left-0"} width={100}/>
        <img src="/main_logo.svg" alt="T1.Дебют" className={"absolute left-0 dark:invisible"} width={100}/>
        <div className="font-bold text-3xl ml-28 dark:text-white">
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