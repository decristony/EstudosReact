type Props = {
  name: string;
  age: number;
};

export const Header = ({ name, age }: Props) => {
  return (
    <header>
      <h1>inicio da pagina</h1>
      <h2>
        olá {name} tudo bem?, vi aqui que voce tem {age} anos
      </h2>
    </header>
  );
};
