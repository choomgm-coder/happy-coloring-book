export default function ColoringLandingPage() {
return ( <main className="min-h-screen bg-[#f8f6ec]">
{/* Hero */} <section className="bg-[#4f8fd9] text-white px-6 py-12 text-center"> <div className="mx-auto max-w-3xl"> <div className="text-4xl">🎨</div>


      <h1 className="mt-4 text-4xl font-bold">
        ตัวอย่างสมุดระบายสีเด็ก
      </h1>

      <p className="mt-4 text-lg text-blue-100">
        ครบ 50 ธีม • ลายเส้นคมชัด • ระบายง่าย • เหมาะสำหรับเด็กและผู้ปกครอง
      </p>

      <a
        href="https://m.me/YOUR_PAGE"
        target="_blank"
        className="mt-8 inline-block rounded-full bg-green-500 px-8 py-4 text-xl font-bold text-white hover:bg-green-600"
      >
        💬 ทักแชทสั่งซื้อเลย
      </a>
    </div>
  </section>

  {/* ราคา */}
  <section className="px-6 py-8 text-center">
    <p className="text-lg text-gray-700">
      <span className="font-bold text-green-700">159 บาท</span> เลือกได้
      <span className="font-bold"> 20 เล่ม</span> (400 หน้า)
      <span className="mx-2">•</span>
      <span className="font-bold text-green-700">199 บาท</span> ได้ครบ
      <span className="font-bold"> 50 เล่ม</span> (1,000 หน้า)
    </p>
  </section>

  {/* ตัวอย่าง */}
  <section className="px-6 pb-10">
    <div className="mx-auto max-w-5xl">
      <div className="mb-6 flex items-center gap-4">
        <div className="h-px flex-1 bg-gray-300" />
        <h2 className="text-xl font-bold text-gray-700">
          ตัวอย่างลายเส้น
        </h2>
        <div className="h-px flex-1 bg-gray-300" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { no: "01", title: "ไดโนเสาร์" },
          { no: "02", title: "สัตว์ป่าซาฟารี" },
          { no: "03", title: "ผลไม้" },
          { no: "04", title: "รถและยานพาหนะ" },
          { no: "05", title: "สัตว์เลี้ยง" },
          { no: "06", title: "ทะเล" },
        ].map((item) => (
          <div
            key={item.no}
            className="rounded-3xl border border-[#d9d1b5] bg-white p-4 shadow-sm"
          >
            <img
              src="/products/animal-coloring-book/cover.png"
              alt={item.title}
              className="aspect-[3/4] w-full rounded-2xl border border-gray-200 object-cover"
            />

            <p className="mt-3 text-sm font-bold text-red-500">
              เล่ม {item.no}
            </p>

            <h3 className="text-lg font-bold text-gray-800">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* PDF */}
  <section className="px-6 pb-10">
    <div className="mx-auto max-w-3xl rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm">
      <h2 className="text-2xl font-bold text-green-800">
        ดาวน์โหลดตัวอย่าง PDF
      </h2>

      <p className="mt-2 text-gray-600">
        ทดลองดูลายเส้นก่อนตัดสินใจสั่งซื้อ
      </p>

      <a
        href="/products/animal-coloring-book/sample.pdf"
        target="_blank"
        className="mt-6 inline-block rounded-full border border-green-600 px-6 py-3 font-semibold text-green-700 hover:bg-green-50"
      >
        ดาวน์โหลด PDF ทดลอง
      </a>
    </div>
  </section>

  {/* PromptPay */}
  <section className="px-6 pb-12">
    <div className="mx-auto max-w-3xl rounded-3xl border border-green-100 bg-green-50 p-8 text-center">
      <h2 className="text-2xl font-bold text-green-800">
        ชำระเงินด้วย PromptPay
      </h2>

      <p className="mt-2 text-gray-600">
        สแกน QR เพื่อชำระเงินจำนวน 159 บาท
      </p>

      <img
        src="/payments/promptpay-159.png"
        alt="PromptPay QR"
        className="mx-auto mt-6 w-64 rounded-2xl border border-green-100 bg-white p-2"
      />

      <p className="mt-4 text-sm text-gray-500">
        หลังโอนเงินแล้ว ส่งสลิปทาง Messenger เพื่อรับไฟล์ทันที
      </p>

      <a
        href="https://m.me/YOUR_PAGE"
        target="_blank"
        className="mt-6 inline-block rounded-full bg-green-600 px-8 py-3 font-semibold text-white hover:bg-green-700"
      >
        ส่งสลิปทาง Messenger
      </a>
    </div>
  </section>
</main>


);
}
