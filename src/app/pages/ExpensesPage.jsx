import CategoryNav from '../components/CategoryNav'

export default function ExpensesPage() {
  return (
    <section aria-labelledby="page-title">
      <CategoryNav />
      <h1 id="page-title">Витрати</h1>
      <div>
        <h3>(Today's date)</h3> //треба динамічно вставляти сьогоднішню дату
        <input placeholder="Опис товару..." />
        <div>
          <button>ввести</button> // потім їм треба дать стилі щоб вони були як на макеті і великими літерами
          <button>Очистити</button>
          <section> </section> //тут буде сама таблиця
        </div>
      </div>
    </section>
  )
}
