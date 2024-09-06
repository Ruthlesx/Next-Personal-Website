'use client'

function FooterLink(props) {
  let {url, text} = props
  return <a className="transition hover:text-teal-500" href={url}>
    {text}
  </a>
}


function Footer() {
  return <footer className="pt-10 bg-black px-8 pb-16 border-t">
    <div className="flex  justify-between gap-6">
      <div className="flex  gap-6 text-sm font-medium text-blue-800">
        <FooterLink text={"About me"} url={"/About-me"} />
        <FooterLink text={"Projects"} url={"/Projects"} />
        <FooterLink text={"Essays"} url={"/Essays"} />

      </div>


      <p className="text-sm text-zinc-400"> c 2024 Lagos Nigeria, All rights reserved </p>
    </div>
  </footer>
}

export default Footer