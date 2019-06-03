import React, { Component } from 'react';
import { connect } from 'react-redux'
import jsonQuery from 'json-query'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltUp, faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons'

class TableBody extends Component {
  
  render() {

    return (
      <tbody>

        
        {
          // realizando iteração da lista de palavras
          this.props.words.map((item, index) => {

            const result = []
            // Para cada palavra da lista de palavras, buscar a posicao para cada um dos apps 
            const firstListPos = jsonQuery(`[*text=${item}]position`, { data: this.props.firstList })
            const secondListPos = jsonQuery(`[*text=${item}]position`, { data: this.props.secondList })

            // criar objeto unico com a posicao das duas listas.
            for (let i = 0; i <= firstListPos.value.length - 1; i++) {
              result.push({
                p1: firstListPos.value[i],
                p2: secondListPos.value[i]
              })
            }

            // calcular a diferenca das posicoes e formatar conforme resultado,
            // demonstrando uma seta para cima ou para baixo.

            return (
              <tr key={index}>
                <th key={index} scope="row">{item}</th>
                {result.map((el, i) => {
                  let dif = 0
                  let showDif = ''

                  dif = el.p2 - el.p1
                  if (isNaN(dif)) {
                    dif = 0
                    showDif = 0
                  }

                  if (el.p1 === null) {
                    el.p1 = "-"
                    showDif = "-"
                  }
                  if (el.p2 === null) {
                    el.p2 = "-"
                    showDif = "-"
                  }

                  dif < 0 ? showDif = dif * -1 : showDif = dif

                  return (
                    <td key={i}>
                      {el.p1}
                      {
                        dif > 0 ? <FontAwesomeIcon color='green' icon={faLongArrowAltUp} />
                          :
                          dif < 0 ? <FontAwesomeIcon color='red' icon={faLongArrowAltDown} /> : null
                      }

                      <small>{dif !== 0 ? showDif : null} </small>
                    </td>
                  );
                })}
              </tr>
            )
          })
        }

      </tbody>

    )
  }
}

const mapStateToProps = ({ ranks }) => {
  return {
    words: ranks.words,
    firstList: ranks.firstList,
    secondList: ranks.secondList,
  }
}

export default connect(mapStateToProps)(TableBody)