import { db } from "../db.js";

export const getusers = (_, res) => {
    const q = "SELECT * FROM usuarios";

    db.query(q, (erro, data) => {
        if (erro) return res.json(erro);

        return res.status(200).json(data);
    });
}
export const addUsers = (req, res) => {
    const q =
        "INSERT INTO usuarios(`nome`, `email`, `tel`, `data_nascimento`) VALUES (?)";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.tel,
        req.body.data_nascimento
    ];

    db.query(q, [values], (erro) => {
        if (erro) return res.json(erro);

        return res.status(200).json("Usuário criado com sucesso");
    });
}
export const updateUser = (req, res) => {
const q =
"UPDATE usuarios SET `nome` = ?, `email` = ?, `tel` = ?, `data_nascimento` = ? WHERE `id` = ?";

const values = [
    req.body.nome,
    req.body.email,
    req.body.tel,
    req.body.data_nascimento
];
db.query(q, [...values, req.params.id], (erro) => {
    if (erro) return res.json(erro);

    return res.status(200).json("Usuário atualizado com sucesso");
});
};

export const deleteUser = (req, res) => {
    const q =
        "DELETE FROM usuarios WHERE `id` = ?";

        db.query(q, [req.params.id], (erro) => {
            if (erro) return res.json(erro);

            return res.status(200).json("Usuário deletado com sucesso");
        });
};