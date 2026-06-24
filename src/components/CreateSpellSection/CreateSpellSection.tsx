import { Box, Button, Flex, Input, Select, Text, Textarea, useToast } from "@chakra-ui/react";
import { Footer } from "../Footer/Footer";
import { useState } from "react";
import type { SpellCardProps } from "../../types/Spells";
import { SpellsService } from "../../services/spellsService";




export function CreateSpellSection() {
  const toast = useToast();
  const [formData, setFormData] = useState<SpellCardProps>({
    alcance: "",
    componentes: "",
    description: "",
    duration: "",
    nivel: "",
    school: "",
    timeConjuration: "",
    title: "",
    bard: false,
    cleric: false,
    druid: false,
    mage: false,
    paladin: false,
    ranger: false,
    ritual: false,
    sorcerer: false,
    wizard: false

  });

  const handleChange = (e: any) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleBooleanChange = (e: any) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value === "true",
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const spell = await SpellsService.createSpell(formData);
      toast({
        title: "Sucesso!",
        description: "Registro salvo com sucesso.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      // limpa campos
      setFormData({
        alcance: "",
        componentes: "",
        description: "",
        duration: "",
        nivel: "",
        school: "",
        timeConjuration: "",
        title: "",
        bard: false,
        cleric: false,
        druid: false,
        mage: false,
        paladin: false,
        ranger: false,
        ritual: false,
        sorcerer: false,
        wizard: false
      });
    } catch (error) {
      toast({
        title: "Erro!",
        description: "Não foi possível cadastrar.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      console.log("Erro ao cadastrar magia");
    }

  };
  return (
    <>
      <Flex height={"210vh"}
        width={"100%"}
        backgroundColor={"gray.900"}
        flexDirection={"column"}
        marginLeft={"3%"}
        fontFamily={'Cinzel'}>

        <Box marginLeft={"3.5%"} marginTop={"2%"} borderRadius={"20px"} width={"95%"} height={"130vh"} backgroundColor={"#161616"}>
          <Box padding={"20px"} borderTop={"2px solid tomato"} borderRadius={"20px"} backgroundColor={"#111111"} width={"95%"} height={"110vh"} marginLeft={"2.5%"} marginTop={"2.5%"}>
            <form onSubmit={handleSubmit}>

              <Box color={"white"} gap={10} display={"flex"} justifyContent={"row"} width={"100%"} height={"10vh"}>
                <Box width={"25%"}>
                  <Text>Nome</Text>
                  <Input textTransform="none" onChange={handleChange} name="title" value={formData.title} type="text"></Input>
                </Box>
                <Box width={"25%"}>
                  <Text>Nível</Text>
                  <Input textTransform="none" onChange={handleChange} name="nivel" value={formData.nivel} type="text"></Input>
                </Box>
                <Box width={"25%"}>
                  <Text>Escola</Text>
                  <Input textTransform="none" onChange={handleChange} name="school" value={formData.school} type="text"></Input>
                </Box>
                <Box width={"25%"}>
                  <Text>Tempo de conjuração</Text>
                  <Input textTransform="none" onChange={handleChange} name="timeConjuration" value={formData.timeConjuration} type="text"></Input>
                </Box>
              </Box>

              <Box marginTop={"2%"} color={"white"} gap={10} display={"flex"} justifyContent={"row"} width={"100%"} height={"10vh"}>
                <Box width={"25%"}>
                  <Text>Alcance</Text>
                  <Input textTransform="none" onChange={handleChange} name="alcance" value={formData.alcance} type="text"></Input>
                </Box>
                <Box width={"25%"}>
                  <Text>Componentes</Text>
                  <Input textTransform="none" onChange={handleChange} name="componentes" value={formData.componentes} type="text"></Input>
                </Box>
                <Box width={"25%"}>
                  <Text>Duração</Text>
                  <Input textTransform="none" onChange={handleChange} name="duration" value={formData.duration} type="text"></Input>
                </Box>
                <Box width={"25%"}>
                  <Text>Ritual</Text>
                  <Select name="ritual" value={String(formData.ritual)} onChange={handleBooleanChange}>
                    <option style={{ backgroundColor: "#111111", color: "white" }} value="true">Sim</option>
                    <option style={{ backgroundColor: "#111111", color: "white" }} value="false">Não</option>
                  </Select>
                </Box>
              </Box>

              <Box marginTop={"2%"} color={"white"} gap={10} display={"flex"} justifyContent={"row"} width={"100%"} height={"10vh"}>
                <Box width={"25%"}>
                  <Text>Bardo</Text>
                  <Select name="bard" value={String(formData.bard)} onChange={handleBooleanChange}>
                    <option style={{ backgroundColor: "#111111", color: "white" }} value="true">Sim</option>
                    <option style={{ backgroundColor: "#111111", color: "white" }} value="false">Não</option>
                  </Select>
                </Box>

                <Box width={"25%"}>
                  <Text>Mago</Text>
                  <Select name="mage" value={String(formData.mage)} onChange={handleBooleanChange}>
                    <option style={{ backgroundColor: "#111111", color: "white" }} value="true">Sim</option>
                    <option style={{ backgroundColor: "#111111", color: "white" }} value="false">Não</option>
                  </Select>
                </Box>

                <Box width={"25%"}>
                  <Text>Bruxo</Text>
                  <Select name="wizard" value={String(formData.wizard)} onChange={handleBooleanChange}>
                    <option style={{ backgroundColor: "#111111", color: "white" }} value="true">Sim</option>
                    <option style={{ backgroundColor: "#111111", color: "white" }} value="false">Não</option>
                  </Select>
                </Box>

                <Box width={"25%"}>
                  <Text>Feiticeiro</Text>
                  <Select name="sorcerer" value={String(formData.sorcerer)} onChange={handleBooleanChange}>
                    <option style={{ backgroundColor: "#111111", color: "white" }} value="true">Sim</option>
                    <option style={{ backgroundColor: "#111111", color: "white" }} value="false">Não</option>
                  </Select>
                </Box>
              </Box>

              <Box marginTop={"2%"} color={"white"} gap={10} display={"flex"} justifyContent={"row"} width={"100%"} height={"10vh"}>
                <Box width={"25%"}>
                  <Text>Paladino</Text>
                  <Select name="paladin" value={String(formData.paladin)} onChange={handleBooleanChange}>
                    <option style={{ backgroundColor: "#111111", color: "white" }} value="true">Sim</option>
                    <option style={{ backgroundColor: "#111111", color: "white" }} value="false">Não</option>
                  </Select>
                </Box>

                <Box width={"25%"}>
                  <Text>Patrulheiro</Text>
                  <Select name="ranger" value={String(formData.ranger)} onChange={handleBooleanChange}>
                    <option style={{ backgroundColor: "#111111", color: "white" }} value="true">Sim</option>
                    <option style={{ backgroundColor: "#111111", color: "white" }} value="false">Não</option>
                  </Select>
                </Box>

                <Box width={"25%"}>
                  <Text>Druida</Text>
                  <Select name="druid" value={String(formData.druid)} onChange={handleBooleanChange}>
                    <option style={{ backgroundColor: "#111111", color: "white" }} value="true">Sim</option>
                    <option style={{ backgroundColor: "#111111", color: "white" }} value="false">Não</option>
                  </Select>
                </Box>

                <Box width={"25%"}>
                  <Text>Clerigo</Text>
                  <Select name="cleric" value={String(formData.cleric)} onChange={handleBooleanChange}>
                    <option style={{ backgroundColor: "#111111", color: "white" }} value="true">Sim</option>
                    <option style={{ backgroundColor: "#111111", color: "white" }} value="false">Não</option>
                  </Select>
                </Box>
              </Box>

              <Box color={"white"} marginTop={"2%"} width={"100%"}>
                <Box>
                  <Text>Descrição</Text>
                  <Textarea textTransform="none" name="description" value={formData.description} onChange={handleChange} height={"25vh"} />
                </Box>
              </Box>

              <Box display={"flex"} marginTop={"5%"} width={"100%"} justifyContent={"right"} alignItems={"right"}>
                <Button type="submit">Cadastrar</Button>
              </Box>

            </form>
          </Box>
        </Box>

        <Footer />
      </Flex>

    </>
  )
}